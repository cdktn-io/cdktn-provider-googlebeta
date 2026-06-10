# `googleKmsFolderKajPolicyConfig` Submodule <a name="`googleKmsFolderKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsFolderKajPolicyConfig <a name="GoogleKmsFolderKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config google_kms_folder_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig(scope: Construct, id: string, config: GoogleKmsFolderKajPolicyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">putDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">resetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultKeyAccessJustificationPolicy` <a name="putDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```typescript
public putDefaultKeyAccessJustificationPolicy(value: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsFolderKajPolicyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `resetDefaultKeyAccessJustificationPolicy` <a name="resetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```typescript
public resetDefaultKeyAccessJustificationPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsFolderKajPolicyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsFolderKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsFolderKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">defaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a>

---

##### `defaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicyInput: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsFolderKajPolicyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsFolderKajPolicyConfigConfig <a name="GoogleKmsFolderKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsFolderKajPolicyConfigConfig: googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder">folder</a></code> | <code>string</code> | The numeric folder number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The numeric folder number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#folder GoogleKmsFolderKajPolicyConfig#folder}

---

##### `defaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```typescript
public readonly defaultKeyAccessJustificationPolicy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#default_key_access_justification_policy GoogleKmsFolderKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsFolderKajPolicyConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#timeouts GoogleKmsFolderKajPolicyConfig#timeouts}

---

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy: googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `allowedAccessReasons`<sup>Optional</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#allowed_access_reasons GoogleKmsFolderKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsFolderKajPolicyConfigTimeouts <a name="GoogleKmsFolderKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

const googleKmsFolderKajPolicyConfigTimeouts: googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">resetAllowedAccessReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAccessReasons` <a name="resetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```typescript
public resetAllowedAccessReasons(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">allowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAccessReasonsInput`<sup>Optional</sup> <a name="allowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```typescript
public readonly allowedAccessReasonsInput: string[];
```

- *Type:* string[]

---

##### `allowedAccessReasons`<sup>Required</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsFolderKajPolicyConfig } from '@cdktn/provider-google-beta'

new googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsFolderKajPolicyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---



