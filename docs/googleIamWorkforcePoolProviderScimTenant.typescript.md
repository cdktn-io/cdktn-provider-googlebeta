# `googleIamWorkforcePoolProviderScimTenant` Submodule <a name="`googleIamWorkforcePoolProviderScimTenant` Submodule" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderScimTenant <a name="GoogleIamWorkforcePoolProviderScimTenant" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant google_iam_workforce_pool_provider_scim_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

new googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant(scope: Construct, id: string, config: GoogleIamWorkforcePoolProviderScimTenantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig">GoogleIamWorkforcePoolProviderScimTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig">GoogleIamWorkforcePoolProviderScimTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping">resetClaimMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete">resetHardDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkforcePoolProviderScimTenantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `resetClaimMapping` <a name="resetClaimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping"></a>

```typescript
public resetClaimMapping(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetHardDelete` <a name="resetHardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete"></a>

```typescript
public resetHardDelete(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderScimTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePoolProviderScimTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderScimTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri">baseUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent">serviceAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput">claimMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput">hardDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput">scimTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping">claimMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete">hardDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `baseUri`<sup>Required</sup> <a name="baseUri" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri"></a>

```typescript
public readonly baseUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `serviceAgent`<sup>Required</sup> <a name="serviceAgent" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent"></a>

```typescript
public readonly serviceAgent: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a>

---

##### `claimMappingInput`<sup>Optional</sup> <a name="claimMappingInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput"></a>

```typescript
public readonly claimMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `hardDeleteInput`<sup>Optional</sup> <a name="hardDeleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput"></a>

```typescript
public readonly hardDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `scimTenantIdInput`<sup>Optional</sup> <a name="scimTenantIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput"></a>

```typescript
public readonly scimTenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkforcePoolProviderScimTenantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping"></a>

```typescript
public readonly claimMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hardDelete`<sup>Required</sup> <a name="hardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete"></a>

```typescript
public readonly hardDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderScimTenantConfig <a name="GoogleIamWorkforcePoolProviderScimTenantConfig" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

const googleIamWorkforcePoolProviderScimTenantConfig: googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping">claimMapping</a></code> | <code>{[ key: string ]: string}</code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description">description</a></code> | <code>string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete">hardDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#location GoogleIamWorkforcePoolProviderScimTenant#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#provider_id GoogleIamWorkforcePoolProviderScimTenant#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#scim_tenant_id GoogleIamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#workforce_pool_id GoogleIamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `claimMapping`<sup>Optional</sup> <a name="claimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping"></a>

```typescript
public readonly claimMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#claim_mapping GoogleIamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#deletion_policy GoogleIamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#description GoogleIamWorkforcePoolProviderScimTenant#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#display_name GoogleIamWorkforcePoolProviderScimTenant#display_name}

---

##### `hardDelete`<sup>Optional</sup> <a name="hardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete"></a>

```typescript
public readonly hardDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#hard_delete GoogleIamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderScimTenantTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#timeouts GoogleIamWorkforcePoolProviderScimTenant#timeouts}

---

### GoogleIamWorkforcePoolProviderScimTenantTimeouts <a name="GoogleIamWorkforcePoolProviderScimTenantTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

const googleIamWorkforcePoolProviderScimTenantTimeouts: googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimTenant } from '@cdktn/provider-google-beta'

new googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolProviderScimTenantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---



