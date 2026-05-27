# `googleLoggingSavedQuery` Submodule <a name="`googleLoggingSavedQuery` Submodule" id="@cdktn/provider-google-beta.googleLoggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingSavedQuery <a name="GoogleLoggingSavedQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQuery(scope: Construct, id: string, config: GoogleLoggingSavedQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery">putLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery">putOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery">resetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery">resetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingQuery` <a name="putLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery"></a>

```typescript
public putLoggingQuery(value: GoogleLoggingSavedQueryLoggingQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `putOpsAnalyticsQuery` <a name="putOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery"></a>

```typescript
public putOpsAnalyticsQuery(value: GoogleLoggingSavedQueryOpsAnalyticsQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleLoggingSavedQueryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingQuery` <a name="resetLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery"></a>

```typescript
public resetLoggingQuery(): void
```

##### `resetOpsAnalyticsQuery` <a name="resetOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```typescript
public resetOpsAnalyticsQuery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingSavedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput">loggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput">opsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `loggingQuery`<sup>Required</sup> <a name="loggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery"></a>

```typescript
public readonly loggingQuery: GoogleLoggingSavedQueryLoggingQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `opsAnalyticsQuery`<sup>Required</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery"></a>

```typescript
public readonly opsAnalyticsQuery: GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLoggingSavedQueryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingQueryInput`<sup>Optional</sup> <a name="loggingQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput"></a>

```typescript
public readonly loggingQueryInput: GoogleLoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opsAnalyticsQueryInput`<sup>Optional</sup> <a name="opsAnalyticsQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```typescript
public readonly opsAnalyticsQueryInput: GoogleLoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleLoggingSavedQueryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingSavedQueryConfig <a name="GoogleLoggingSavedQueryConfig" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

const googleLoggingSavedQueryConfig: googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location">location</a></code> | <code>string</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name">name</a></code> | <code>string</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description">description</a></code> | <code>string</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#deletion_policy GoogleLoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery"></a>

```typescript
public readonly loggingQuery: GoogleLoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```typescript
public readonly opsAnalyticsQuery: GoogleLoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLoggingSavedQueryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

### GoogleLoggingSavedQueryLoggingQuery <a name="GoogleLoggingSavedQueryLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

const googleLoggingSavedQueryLoggingQuery: googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>string</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>number</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields">summaryFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart">summaryFieldStart</a></code> | <code>number</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

##### `summaryFieldEnd`<sup>Optional</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```typescript
public readonly summaryFieldEnd: number;
```

- *Type:* number

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

##### `summaryFields`<sup>Optional</sup> <a name="summaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```typescript
public readonly summaryFields: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

##### `summaryFieldStart`<sup>Optional</sup> <a name="summaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```typescript
public readonly summaryFieldStart: number;
```

- *Type:* number

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

### GoogleLoggingSavedQueryLoggingQuerySummaryFields <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

const googleLoggingSavedQueryLoggingQuerySummaryFields: googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>string</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#field GoogleLoggingSavedQuery#field}

---

### GoogleLoggingSavedQueryOpsAnalyticsQuery <a name="GoogleLoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

const googleLoggingSavedQueryOpsAnalyticsQuery: googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sqlQueryText</a></code> | <code>string</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```typescript
public readonly sqlQueryText: string;
```

- *Type:* string

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

### GoogleLoggingSavedQueryTimeouts <a name="GoogleLoggingSavedQueryTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

const googleLoggingSavedQueryTimeouts: googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingSavedQueryLoggingQueryOutputReference <a name="GoogleLoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">putSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">resetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">resetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">resetSummaryFieldStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummaryFields` <a name="putSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```typescript
public putSummaryFields(value: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `resetSummaryFieldEnd` <a name="resetSummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```typescript
public resetSummaryFieldEnd(): void
```

##### `resetSummaryFields` <a name="resetSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```typescript
public resetSummaryFields(): void
```

##### `resetSummaryFieldStart` <a name="resetSummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```typescript
public resetSummaryFieldStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summaryFields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summaryFieldEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summaryFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summaryFieldStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summaryFieldStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summaryFields`<sup>Required</sup> <a name="summaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```typescript
public readonly summaryFields: GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `summaryFieldEndInput`<sup>Optional</sup> <a name="summaryFieldEndInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```typescript
public readonly summaryFieldEndInput: number;
```

- *Type:* number

---

##### `summaryFieldsInput`<sup>Optional</sup> <a name="summaryFieldsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```typescript
public readonly summaryFieldsInput: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `summaryFieldStartInput`<sup>Optional</sup> <a name="summaryFieldStartInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```typescript
public readonly summaryFieldStartInput: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `summaryFieldEnd`<sup>Required</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```typescript
public readonly summaryFieldEnd: number;
```

- *Type:* number

---

##### `summaryFieldStart`<sup>Required</sup> <a name="summaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```typescript
public readonly summaryFieldStart: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```typescript
public get(index: number): GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>

---


### GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sqlQueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sqlQueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlQueryTextInput`<sup>Optional</sup> <a name="sqlQueryTextInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```typescript
public readonly sqlQueryTextInput: string;
```

- *Type:* string

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```typescript
public readonly sqlQueryText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---


### GoogleLoggingSavedQueryTimeoutsOutputReference <a name="GoogleLoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleLoggingSavedQuery } from '@cdktn/provider-google-beta'

new googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingSavedQueryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---



