# `googleCloudIdentityInboundSamlSsoProfile` Submodule <a name="`googleCloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundSamlSsoProfile <a name="GoogleCloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile(scope: Construct, id: string, config: GoogleCloudIdentityInboundSamlSsoProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig">GoogleCloudIdentityInboundSamlSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig">GoogleCloudIdentityInboundSamlSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```typescript
public putIdpConfig(value: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudIdentityInboundSamlSsoProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```typescript
public resetCustomer(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityInboundSamlSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inboundSamlSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig">spConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inboundSamlSsoProfileId`<sup>Required</sup> <a name="inboundSamlSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```typescript
public readonly inboundSamlSsoProfileId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```typescript
public readonly spConfig: GoogleCloudIdentityInboundSamlSsoProfileSpConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundSamlSsoProfileConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundSamlSsoProfileConfig: googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundSamlSsoProfileIdpConfig: googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entityId</a></code> | <code>string</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>string</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>string</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```typescript
public readonly singleSignOnServiceUri: string;
```

- *Type:* string

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logoutRedirectUri`<sup>Optional</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```typescript
public readonly logoutRedirectUri: string;
```

- *Type:* string

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### GoogleCloudIdentityInboundSamlSsoProfileSpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundSamlSsoProfileSpConfig: googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig = { ... }
```


### GoogleCloudIdentityInboundSamlSsoProfileTimeouts <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

const googleCloudIdentityInboundSamlSsoProfileTimeouts: googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">resetLogoutRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```typescript
public resetChangePasswordUri(): void
```

##### `resetLogoutRedirectUri` <a name="resetLogoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```typescript
public resetLogoutRedirectUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logoutRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">singleSignOnServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```typescript
public readonly changePasswordUriInput: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `logoutRedirectUriInput`<sup>Optional</sup> <a name="logoutRedirectUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```typescript
public readonly logoutRedirectUriInput: string;
```

- *Type:* string

---

##### `singleSignOnServiceUriInput`<sup>Optional</sup> <a name="singleSignOnServiceUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```typescript
public readonly singleSignOnServiceUriInput: string;
```

- *Type:* string

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `logoutRedirectUri`<sup>Required</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```typescript
public readonly logoutRedirectUri: string;
```

- *Type:* string

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```typescript
public readonly singleSignOnServiceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigList <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```typescript
public get(index: number): GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertionConsumerServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertionConsumerServiceUri`<sup>Required</sup> <a name="assertionConsumerServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```typescript
public readonly assertionConsumerServiceUri: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityInboundSamlSsoProfileSpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google-beta'

new googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---



