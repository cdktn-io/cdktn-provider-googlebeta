# `googleParameterManagerRegionalParameter` Submodule <a name="`googleParameterManagerRegionalParameter` Submodule" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerRegionalParameter <a name="GoogleParameterManagerRegionalParameter" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter google_parameter_manager_regional_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

new googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter(scope: Construct, id: string, config: GoogleParameterManagerRegionalParameterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleParameterManagerRegionalParameterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleParameterManagerRegionalParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleParameterManagerRegionalParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerRegionalParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember">policyMember</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput">parameterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId">parameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyMember`<sup>Required</sup> <a name="policyMember" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember"></a>

```typescript
public readonly policyMember: GoogleParameterManagerRegionalParameterPolicyMemberList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerRegionalParameterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput"></a>

```typescript
public readonly parameterIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleParameterManagerRegionalParameterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId"></a>

```typescript
public readonly parameterId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerRegionalParameterConfig <a name="GoogleParameterManagerRegionalParameterConfig" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

const googleParameterManagerRegionalParameterConfig: googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location">location</a></code> | <code>string</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId">parameterId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format">format</a></code> | <code>string</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#location GoogleParameterManagerRegionalParameter#location}

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId"></a>

```typescript
public readonly parameterId: string;
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#parameter_id GoogleParameterManagerRegionalParameter#parameter_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#deletion_policy GoogleParameterManagerRegionalParameter#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#format GoogleParameterManagerRegionalParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#kms_key GoogleParameterManagerRegionalParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#labels GoogleParameterManagerRegionalParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerRegionalParameterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#timeouts GoogleParameterManagerRegionalParameter#timeouts}

---

### GoogleParameterManagerRegionalParameterPolicyMember <a name="GoogleParameterManagerRegionalParameterPolicyMember" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

const googleParameterManagerRegionalParameterPolicyMember: googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember = { ... }
```


### GoogleParameterManagerRegionalParameterTimeouts <a name="GoogleParameterManagerRegionalParameterTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

const googleParameterManagerRegionalParameterTimeouts: googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerRegionalParameterPolicyMemberList <a name="GoogleParameterManagerRegionalParameterPolicyMemberList" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

new googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get"></a>

```typescript
public get(index: number): GoogleParameterManagerRegionalParameterPolicyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleParameterManagerRegionalParameterPolicyMemberOutputReference <a name="GoogleParameterManagerRegionalParameterPolicyMemberOutputReference" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

new googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iamPolicyNamePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iamPolicyUidPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamPolicyNamePrincipal`<sup>Required</sup> <a name="iamPolicyNamePrincipal" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```typescript
public readonly iamPolicyNamePrincipal: string;
```

- *Type:* string

---

##### `iamPolicyUidPrincipal`<sup>Required</sup> <a name="iamPolicyUidPrincipal" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```typescript
public readonly iamPolicyUidPrincipal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleParameterManagerRegionalParameterPolicyMember;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a>

---


### GoogleParameterManagerRegionalParameterTimeoutsOutputReference <a name="GoogleParameterManagerRegionalParameterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameter } from '@cdktn/provider-google-beta'

new googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleParameterManagerRegionalParameterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---



