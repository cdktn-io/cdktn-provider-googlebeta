# `googleKmsOrganizationKajPolicyConfig` Submodule <a name="`googleKmsOrganizationKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsOrganizationKajPolicyConfig <a name="GoogleKmsOrganizationKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig(scope: Construct, id: string, config: GoogleKmsOrganizationKajPolicyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">putDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">resetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultKeyAccessJustificationPolicy` <a name="putDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```typescript
public putDefaultKeyAccessJustificationPolicy(value: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsOrganizationKajPolicyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `resetDefaultKeyAccessJustificationPolicy` <a name="resetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```typescript
public resetDefaultKeyAccessJustificationPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsOrganizationKajPolicyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsOrganizationKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsOrganizationKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">defaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicy: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a>

---

##### `defaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicyInput: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsOrganizationKajPolicyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsOrganizationKajPolicyConfigConfig <a name="GoogleKmsOrganizationKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsOrganizationKajPolicyConfigConfig: googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization">organization</a></code> | <code>string</code> | The organization number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}

---

##### `defaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicy: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsOrganizationKajPolicyConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}

---

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy: googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `allowedAccessReasons`<sup>Optional</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#allowed_access_reasons GoogleKmsOrganizationKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsOrganizationKajPolicyConfigTimeouts <a name="GoogleKmsOrganizationKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsOrganizationKajPolicyConfigTimeouts: googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">resetAllowedAccessReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAccessReasons` <a name="resetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```typescript
public resetAllowedAccessReasons(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">allowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAccessReasonsInput`<sup>Optional</sup> <a name="allowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```typescript
public readonly allowedAccessReasonsInput: string[];
```

- *Type:* string[]

---

##### `allowedAccessReasons`<sup>Required</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsOrganizationKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsOrganizationKajPolicyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---



