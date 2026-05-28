# `googleCesExample` Submodule <a name="`googleCesExample` Submodule" id="@cdktn/provider-google-beta.googleCesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesExample <a name="GoogleCesExample" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExample(scope: Construct, id: string, config: GoogleCesExampleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent">resetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMessages` <a name="putMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages"></a>

```typescript
public putMessages(value: IResolvable | GoogleCesExampleMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesExampleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntryAgent` <a name="resetEntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent"></a>

```typescript
public resetEntryAgent(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

googleCesExample.GoogleCesExample.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

googleCesExample.GoogleCesExample.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

googleCesExample.GoogleCesExample.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

googleCesExample.GoogleCesExample.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesExample to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid">invalid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput">entryAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput">exampleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput">messagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent">entryAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId">exampleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid"></a>

```typescript
public readonly invalid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages"></a>

```typescript
public readonly messages: GoogleCesExampleMessagesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesExampleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entryAgentInput`<sup>Optional</sup> <a name="entryAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput"></a>

```typescript
public readonly entryAgentInput: string;
```

- *Type:* string

---

##### `exampleIdInput`<sup>Optional</sup> <a name="exampleIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput"></a>

```typescript
public readonly exampleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | GoogleCesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesExampleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entryAgent`<sup>Required</sup> <a name="entryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent"></a>

```typescript
public readonly entryAgent: string;
```

- *Type:* string

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId"></a>

```typescript
public readonly exampleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesExampleConfig <a name="GoogleCesExampleConfig" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleConfig: googleCesExample.GoogleCesExampleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId">exampleId</a></code> | <code>string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent">entryAgent</a></code> | <code>string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages">messages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId"></a>

```typescript
public readonly exampleId: string;
```

- *Type:* string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `entryAgent`<sup>Optional</sup> <a name="entryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent"></a>

```typescript
public readonly entryAgent: string;
```

- *Type:* string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages"></a>

```typescript
public readonly messages: IResolvable | GoogleCesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesExampleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

### GoogleCesExampleMessages <a name="GoogleCesExampleMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessages: googleCesExample.GoogleCesExampleMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks">chunks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role">role</a></code> | <code>string</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks"></a>

```typescript
public readonly chunks: IResolvable | GoogleCesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#role GoogleCesExample#role}

---

### GoogleCesExampleMessagesChunks <a name="GoogleCesExampleMessagesChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunks: googleCesExample.GoogleCesExampleMessagesChunks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text">text</a></code> | <code>string</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables">updatedVariables</a></code> | <code>string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image"></a>

```typescript
public readonly image: GoogleCesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#image GoogleCesExample#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#text GoogleCesExample#text}

---

##### `toolCall`<sup>Optional</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}

---

##### `toolResponse`<sup>Optional</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}

---

##### `updatedVariables`<sup>Optional</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: string;
```

- *Type:* string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}

---

### GoogleCesExampleMessagesChunksAgentTransfer <a name="GoogleCesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksAgentTransfer: googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

### GoogleCesExampleMessagesChunksImage <a name="GoogleCesExampleMessagesChunksImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksImage: googleCesExample.GoogleCesExampleMessagesChunksImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data">data</a></code> | <code>string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

### GoogleCesExampleMessagesChunksToolCall <a name="GoogleCesExampleMessagesChunksToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksToolCall: googleCesExample.GoogleCesExampleMessagesChunksToolCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args">args</a></code> | <code>string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id">id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool">tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolCallToolsetTool <a name="GoogleCesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksToolCallToolsetTool: googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleMessagesChunksToolResponse <a name="GoogleCesExampleMessagesChunksToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksToolResponse: googleCesExample.GoogleCesExampleMessagesChunksToolResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response">response</a></code> | <code>string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id">id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool">tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolResponseToolsetTool <a name="GoogleCesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleMessagesChunksToolResponseToolsetTool: googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleTimeouts <a name="GoogleCesExampleTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

const googleCesExampleTimeouts: googleCesExample.GoogleCesExampleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#create GoogleCesExample#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#update GoogleCesExample#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesExampleMessagesChunksAgentTransferOutputReference <a name="GoogleCesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```typescript
public readonly targetAgentInput: string;
```

- *Type:* string

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---


### GoogleCesExampleMessagesChunksImageOutputReference <a name="GoogleCesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---


### GoogleCesExampleMessagesChunksList <a name="GoogleCesExampleMessagesChunksList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get"></a>

```typescript
public get(index: number): GoogleCesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---


### GoogleCesExampleMessagesChunksOutputReference <a name="GoogleCesExampleMessagesChunksOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall">putToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse">putToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall">resetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse">resetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables">resetUpdatedVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```typescript
public putAgentTransfer(value: GoogleCesExampleMessagesChunksAgentTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `putImage` <a name="putImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage"></a>

```typescript
public putImage(value: GoogleCesExampleMessagesChunksImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `putToolCall` <a name="putToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall"></a>

```typescript
public putToolCall(value: GoogleCesExampleMessagesChunksToolCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `putToolResponse` <a name="putToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse"></a>

```typescript
public putToolResponse(value: GoogleCesExampleMessagesChunksToolResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```typescript
public resetAgentTransfer(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetToolCall` <a name="resetToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall"></a>

```typescript
public resetToolCall(): void
```

##### `resetToolResponse` <a name="resetToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```typescript
public resetToolResponse(): void
```

##### `resetUpdatedVariables` <a name="resetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```typescript
public resetUpdatedVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput">toolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput">toolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput">updatedVariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables">updatedVariables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesExampleMessagesChunksAgentTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image"></a>

```typescript
public readonly image: GoogleCesExampleMessagesChunksImageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a>

---

##### `toolCall`<sup>Required</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesExampleMessagesChunksToolCallOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a>

---

##### `toolResponse`<sup>Required</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesExampleMessagesChunksToolResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```typescript
public readonly agentTransferInput: GoogleCesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: GoogleCesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `toolCallInput`<sup>Optional</sup> <a name="toolCallInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```typescript
public readonly toolCallInput: GoogleCesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `toolResponseInput`<sup>Optional</sup> <a name="toolResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```typescript
public readonly toolResponseInput: GoogleCesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `updatedVariablesInput`<sup>Optional</sup> <a name="updatedVariablesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```typescript
public readonly updatedVariablesInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `updatedVariables`<sup>Required</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesExampleMessagesChunks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>

---


### GoogleCesExampleMessagesChunksToolCallOutputReference <a name="GoogleCesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesExampleMessagesChunksToolCallToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput">argsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---


### GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---


### GoogleCesExampleMessagesChunksToolResponseOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesExampleMessagesChunksToolResponseToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---


### GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---


### GoogleCesExampleMessagesList <a name="GoogleCesExampleMessagesList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get"></a>

```typescript
public get(index: number): GoogleCesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---


### GoogleCesExampleMessagesOutputReference <a name="GoogleCesExampleMessagesOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks">putChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks">resetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunks` <a name="putChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks"></a>

```typescript
public putChunks(value: IResolvable | GoogleCesExampleMessagesChunks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---

##### `resetChunks` <a name="resetChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks"></a>

```typescript
public resetChunks(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput">chunksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks"></a>

```typescript
public readonly chunks: GoogleCesExampleMessagesChunksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a>

---

##### `chunksInput`<sup>Optional</sup> <a name="chunksInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput"></a>

```typescript
public readonly chunksInput: IResolvable | GoogleCesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesExampleMessages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>

---


### GoogleCesExampleTimeoutsOutputReference <a name="GoogleCesExampleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesExample } from '@cdktn/provider-google-beta'

new googleCesExample.GoogleCesExampleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesExampleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---



