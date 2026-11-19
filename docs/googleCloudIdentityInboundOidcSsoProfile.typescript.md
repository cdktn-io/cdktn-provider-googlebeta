# `googleCloudIdentityInboundOidcSsoProfile` Submodule <a name="`googleCloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundOidcSsoProfile <a name="GoogleCloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile(scope: Construct, id: string, config: GoogleCloudIdentityInboundOidcSsoProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig">putRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig">resetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```typescript
public putIdpConfig(value: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `putRpConfig` <a name="putRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```typescript
public putRpConfig(value: GoogleCloudIdentityInboundOidcSsoProfileRpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudIdentityInboundOidcSsoProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```typescript
public resetCustomer(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRpConfig` <a name="resetRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```typescript
public resetRpConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inboundOidcSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inboundOidcSsoProfileId`<sup>Required</sup> <a name="inboundOidcSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```typescript
public readonly inboundOidcSsoProfileId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rpConfig`<sup>Required</sup> <a name="rpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```typescript
public readonly rpConfig: GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rpConfigInput`<sup>Optional</sup> <a name="rpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```typescript
public readonly rpConfigInput: GoogleCloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundOidcSsoProfileConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundOidcSsoProfileConfig: googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```typescript
public readonly rpConfig: GoogleCloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundOidcSsoProfileIdpConfig: googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuerUri</a></code> | <code>string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### GoogleCloudIdentityInboundOidcSsoProfileRpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundOidcSsoProfileRpConfig: googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

### GoogleCloudIdentityInboundOidcSsoProfileTimeouts <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundOidcSsoProfileTimeouts: googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```typescript
public resetChangePasswordUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```typescript
public readonly changePasswordUriInput: string;
```

- *Type:* string

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---



