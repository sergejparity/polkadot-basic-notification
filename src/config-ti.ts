/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from 'ts-interface-checker';
// tslint:disable:object-literal-key-quotes

export const Only = t.iface([], {
	type: t.lit('only'),
	only: t.array('ISubscriptionTarget')
});

export const Ignore = t.iface([], {
	type: t.lit('ignore'),
	ignore: t.array('ISubscriptionTarget')
});

export const All = t.iface([], {
	type: t.lit('all')
});

export const MethodSubscription = t.union('All', 'Only', 'Ignore');

export const ISubscriptionTarget = t.iface([], {
	pallet: 'string',
	method: 'string'
});

export const RawAccount = t.iface([], {
	address: 'string',
	nickname: 'string'
});

export const BatchConfig = t.iface([], {
	interval: 'number',
	misc: t.opt('boolean')
});

export const EmailConfig = t.iface([], {
	from: 'string',
	to: t.array('string'),
	gpgpubkey: t.opt('string'),
	transporter: 'any',
	batch: t.opt('BatchConfig')
});

export const MatrixConfig = t.iface([], {
	userId: 'string',
	accessToken: 'string',
	roomId: 'string',
	server: 'string',
	batch: t.opt('BatchConfig')
});

export const FsConfig = t.iface([], {
	path: 'string',
	batch: t.opt('BatchConfig')
});

export const ConsoleConfig = t.iface([], {
	batch: t.opt('BatchConfig')
});

export const TelegramConfig = t.iface([], {
	chatId: 'string',
	botToken: 'string',
	batch: t.opt('BatchConfig')
});

export const ReportersConfig = t.iface([], {
	email: t.opt('EmailConfig'),
	matrix: t.opt('MatrixConfig'),
	fs: t.opt('FsConfig'),
	telegram: t.opt('TelegramConfig'),
	console: t.opt('ConsoleConfig')
});

export const ApiSubscription = t.enumtype({
	Head: 'head',
	Finalized: 'finalized'
});

export const AppConfig = t.iface([], {
	accounts: t.array('RawAccount'),
	endpoints: t.array('string'),
	method_subscription: 'MethodSubscription',
	api_subscription: 'ApiSubscription',
	reporters: 'ReportersConfig'
});

const exportedTypeSuite: t.ITypeSuite = {
	Only,
	Ignore,
	All,
	MethodSubscription,
	ISubscriptionTarget,
	RawAccount,
	BatchConfig,
	EmailConfig,
	MatrixConfig,
	FsConfig,
	ConsoleConfig,
	TelegramConfig,
	ReportersConfig,
	ApiSubscription,
	AppConfig
};
export default exportedTypeSuite;
