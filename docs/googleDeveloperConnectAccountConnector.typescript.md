# `googleDeveloperConnectAccountConnector` Submodule <a name="`googleDeveloperConnectAccountConnector` Submodule" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectAccountConnector <a name="GoogleDeveloperConnectAccountConnector" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector(scope: Construct, id: string, config: GoogleDeveloperConnectAccountConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig">GoogleDeveloperConnectAccountConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig">GoogleDeveloperConnectAccountConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig">putCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig">putProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig">resetCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig">resetProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomOauthConfig` <a name="putCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig"></a>

```typescript
public putCustomOauthConfig(value: GoogleDeveloperConnectAccountConnectorCustomOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `putProviderOauthConfig` <a name="putProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```typescript
public putProviderOauthConfig(value: GoogleDeveloperConnectAccountConnectorProviderOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig"></a>

```typescript
public putProxyConfig(value: GoogleDeveloperConnectAccountConnectorProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDeveloperConnectAccountConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCustomOauthConfig` <a name="resetCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig"></a>

```typescript
public resetCustomOauthConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProviderOauthConfig` <a name="resetProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```typescript
public resetProviderOauthConfig(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectAccountConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig">customOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri">oauthStartUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput">accountConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput">customOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput">providerOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId">accountConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customOauthConfig`<sup>Required</sup> <a name="customOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig"></a>

```typescript
public readonly customOauthConfig: GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthStartUri`<sup>Required</sup> <a name="oauthStartUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri"></a>

```typescript
public readonly oauthStartUri: string;
```

- *Type:* string

---

##### `providerOauthConfig`<sup>Required</sup> <a name="providerOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```typescript
public readonly providerOauthConfig: GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accountConnectorIdInput`<sup>Optional</sup> <a name="accountConnectorIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```typescript
public readonly accountConnectorIdInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customOauthConfigInput`<sup>Optional</sup> <a name="customOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput"></a>

```typescript
public readonly customOauthConfigInput: GoogleDeveloperConnectAccountConnectorCustomOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `providerOauthConfigInput`<sup>Optional</sup> <a name="providerOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```typescript
public readonly providerOauthConfigInput: GoogleDeveloperConnectAccountConnectorProviderOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: GoogleDeveloperConnectAccountConnectorProxyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDeveloperConnectAccountConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId"></a>

```typescript
public readonly accountConnectorId: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectAccountConnectorConfig <a name="GoogleDeveloperConnectAccountConnectorConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorConfig: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId">accountConnectorId</a></code> | <code>string</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig">customOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag">etag</a></code> | <code>string</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```typescript
public readonly accountConnectorId: string;
```

- *Type:* string

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#account_connector_id GoogleDeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#location GoogleDeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#annotations GoogleDeveloperConnectAccountConnector#annotations}

---

##### `customOauthConfig`<sup>Optional</sup> <a name="customOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig"></a>

```typescript
public readonly customOauthConfig: GoogleDeveloperConnectAccountConnectorCustomOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#custom_oauth_config GoogleDeveloperConnectAccountConnector#custom_oauth_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#deletion_policy GoogleDeveloperConnectAccountConnector#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#etag GoogleDeveloperConnectAccountConnector#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#labels GoogleDeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}.

---

##### `providerOauthConfig`<sup>Optional</sup> <a name="providerOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```typescript
public readonly providerOauthConfig: GoogleDeveloperConnectAccountConnectorProviderOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#provider_oauth_config GoogleDeveloperConnectAccountConnector#provider_oauth_config}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleDeveloperConnectAccountConnectorProxyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#proxy_config GoogleDeveloperConnectAccountConnector#proxy_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectAccountConnectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#timeouts GoogleDeveloperConnectAccountConnector#timeouts}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorCustomOauthConfig: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri">authUri</a></code> | <code>string</code> | The OAuth2 authrization server URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri">hostUri</a></code> | <code>string</code> | The host URI of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider">scmProvider</a></code> | <code>string</code> | The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The scopes to be requested during OAuth. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri">tokenUri</a></code> | <code>string</code> | The OAuth2 token request URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled">pkceDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable PKCE for this OAuth config. PKCE is enabled by default. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | SSL certificate to use for requests to a private service. |

---

##### `authUri`<sup>Required</sup> <a name="authUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri"></a>

```typescript
public readonly authUri: string;
```

- *Type:* string

The OAuth2 authrization server URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#auth_uri GoogleDeveloperConnectAccountConnector#auth_uri}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#client_id GoogleDeveloperConnectAccountConnector#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only.

The client secret of the OAuth application.
It will be provided as plain text, but encrypted and stored in developer
connect. As INPUT_ONLY field, it will not be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#client_secret GoogleDeveloperConnectAccountConnector#client_secret}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

The host URI of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#host_uri GoogleDeveloperConnectAccountConnector#host_uri}

---

##### `scmProvider`<sup>Required</sup> <a name="scmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider"></a>

```typescript
public readonly scmProvider: string;
```

- *Type:* string

The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#scm_provider GoogleDeveloperConnectAccountConnector#scm_provider}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The scopes to be requested during OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri"></a>

```typescript
public readonly tokenUri: string;
```

- *Type:* string

The OAuth2 token request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#token_uri GoogleDeveloperConnectAccountConnector#token_uri}

---

##### `pkceDisabled`<sup>Optional</sup> <a name="pkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled"></a>

```typescript
public readonly pkceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable PKCE for this OAuth config. PKCE is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#pkce_disabled GoogleDeveloperConnectAccountConnector#pkce_disabled}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#service_directory_config GoogleDeveloperConnectAccountConnector#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

SSL certificate to use for requests to a private service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#ssl_ca_certificate GoogleDeveloperConnectAccountConnector#ssl_ca_certificate}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#service GoogleDeveloperConnectAccountConnector#service}

---

### GoogleDeveloperConnectAccountConnectorProviderOauthConfig <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorProviderOauthConfig: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">systemProviderId</a></code> | <code>string</code> | Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `systemProviderId`<sup>Optional</sup> <a name="systemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```typescript
public readonly systemProviderId: string;
```

- *Type:* string

Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#system_provider_id GoogleDeveloperConnectAccountConnector#system_provider_id}

---

### GoogleDeveloperConnectAccountConnectorProxyConfig <a name="GoogleDeveloperConnectAccountConnectorProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorProxyConfig: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#enabled GoogleDeveloperConnectAccountConnector#enabled}

---

### GoogleDeveloperConnectAccountConnectorTimeouts <a name="GoogleDeveloperConnectAccountConnectorTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

const googleDeveloperConnectAccountConnectorTimeouts: googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled">resetPkceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `resetPkceDisabled` <a name="resetPkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled"></a>

```typescript
public resetPkceDisabled(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput">authUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput">pkceDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput">scmProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput">tokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri">authUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled">pkceDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider">scmProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri">tokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a>

---

##### `authUriInput`<sup>Optional</sup> <a name="authUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput"></a>

```typescript
public readonly authUriInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `pkceDisabledInput`<sup>Optional</sup> <a name="pkceDisabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput"></a>

```typescript
public readonly pkceDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scmProviderInput`<sup>Optional</sup> <a name="scmProviderInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput"></a>

```typescript
public readonly scmProviderInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `tokenUriInput`<sup>Optional</sup> <a name="tokenUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput"></a>

```typescript
public readonly tokenUriInput: string;
```

- *Type:* string

---

##### `authUri`<sup>Required</sup> <a name="authUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri"></a>

```typescript
public readonly authUri: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `pkceDisabled`<sup>Required</sup> <a name="pkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled"></a>

```typescript
public readonly pkceDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scmProvider`<sup>Required</sup> <a name="scmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider"></a>

```typescript
public readonly scmProvider: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri"></a>

```typescript
public readonly tokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectAccountConnectorCustomOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">resetSystemProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemProviderId` <a name="resetSystemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```typescript
public resetSystemProviderId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">systemProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">systemProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `systemProviderIdInput`<sup>Optional</sup> <a name="systemProviderIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```typescript
public readonly systemProviderIdInput: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `systemProviderId`<sup>Required</sup> <a name="systemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```typescript
public readonly systemProviderId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectAccountConnectorProviderOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectAccountConnectorProxyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---


### GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference <a name="GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectAccountConnector } from '@cdktn/provider-google-beta'

new googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectAccountConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---



