# `googleMonitoringSnooze` Submodule <a name="`googleMonitoringSnooze` Submodule" id="@cdktn/provider-google-beta.googleMonitoringSnooze"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringSnooze <a name="GoogleMonitoringSnooze" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze google_monitoring_snooze}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

new googleMonitoringSnooze.GoogleMonitoringSnooze(scope: Construct, id: string, config: GoogleMonitoringSnoozeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig">GoogleMonitoringSnoozeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig">GoogleMonitoringSnoozeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putCriteria"></a>

```typescript
public putCriteria(value: GoogleMonitoringSnoozeCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a>

---

##### `putInterval` <a name="putInterval" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putInterval"></a>

```typescript
public putInterval(value: GoogleMonitoringSnoozeInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMonitoringSnoozeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMonitoringSnooze resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isConstruct"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

googleMonitoringSnooze.GoogleMonitoringSnooze.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformElement"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformResource"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleMonitoringSnooze resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringSnooze to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringSnooze that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringSnooze to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference">GoogleMonitoringSnoozeCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference">GoogleMonitoringSnoozeIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference">GoogleMonitoringSnoozeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.criteria"></a>

```typescript
public readonly criteria: GoogleMonitoringSnoozeCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference">GoogleMonitoringSnoozeCriteriaOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.interval"></a>

```typescript
public readonly interval: GoogleMonitoringSnoozeIntervalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference">GoogleMonitoringSnoozeIntervalOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringSnoozeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference">GoogleMonitoringSnoozeTimeoutsOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: GoogleMonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.intervalInput"></a>

```typescript
public readonly intervalInput: GoogleMonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMonitoringSnoozeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnooze.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringSnoozeConfig <a name="GoogleMonitoringSnoozeConfig" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

const googleMonitoringSnoozeConfig: googleMonitoringSnooze.GoogleMonitoringSnoozeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#id GoogleMonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#project GoogleMonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.criteria"></a>

```typescript
public readonly criteria: GoogleMonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#criteria GoogleMonitoringSnooze#criteria}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#display_name GoogleMonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.interval"></a>

```typescript
public readonly interval: GoogleMonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#interval GoogleMonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#id GoogleMonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#project GoogleMonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringSnoozeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#timeouts GoogleMonitoringSnooze#timeouts}

---

### GoogleMonitoringSnoozeCriteria <a name="GoogleMonitoringSnoozeCriteria" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

const googleMonitoringSnoozeCriteria: googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria.property.filter">filter</a></code> | <code>string</code> | When you define a snooze, you can also define a filter for that snooze. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria.property.policies">policies</a></code> | <code>string[]</code> | The specific AlertPolicy names for the alert that should be snoozed. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id=\"1234567890\" AND metric.labels.instance_name=\"test_group\" AND metadata.user_labels.foo=\"bar\" AND metadata.system_labels.region=\"us-central1\""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#filter GoogleMonitoringSnooze#filter}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#policies GoogleMonitoringSnooze#policies}

---

### GoogleMonitoringSnoozeInterval <a name="GoogleMonitoringSnoozeInterval" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

const googleMonitoringSnoozeInterval: googleMonitoringSnooze.GoogleMonitoringSnoozeInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval.property.endTime">endTime</a></code> | <code>string</code> | The end of the time interval. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval.property.startTime">startTime</a></code> | <code>string</code> | The beginning of the time interval. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#end_time GoogleMonitoringSnooze#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#start_time GoogleMonitoringSnooze#start_time}

---

### GoogleMonitoringSnoozeTimeouts <a name="GoogleMonitoringSnoozeTimeouts" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

const googleMonitoringSnoozeTimeouts: googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#create GoogleMonitoringSnooze#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#delete GoogleMonitoringSnooze#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#update GoogleMonitoringSnooze#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#create GoogleMonitoringSnooze#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#delete GoogleMonitoringSnooze#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_monitoring_snooze#update GoogleMonitoringSnooze#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringSnoozeCriteriaOutputReference <a name="GoogleMonitoringSnoozeCriteriaOutputReference" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

new googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeCriteria">GoogleMonitoringSnoozeCriteria</a>

---


### GoogleMonitoringSnoozeIntervalOutputReference <a name="GoogleMonitoringSnoozeIntervalOutputReference" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

new googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeInterval">GoogleMonitoringSnoozeInterval</a>

---


### GoogleMonitoringSnoozeTimeoutsOutputReference <a name="GoogleMonitoringSnoozeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringSnooze } from '@cdktn/provider-google-beta'

new googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringSnoozeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMonitoringSnooze.GoogleMonitoringSnoozeTimeouts">GoogleMonitoringSnoozeTimeouts</a>

---



