# `googleChronicleParser` Submodule <a name="`googleChronicleParser` Submodule" id="@cdktn/provider-google-beta.googleChronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleParser <a name="GoogleChronicleParser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParser(scope: Construct, id: string, config: GoogleChronicleParserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig">GoogleChronicleParserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig">GoogleChronicleParserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode">putLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo">putVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn">resetCbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode">resetLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs">resetValidatedOnEmptyLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo">resetVersionInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLowCode` <a name="putLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode"></a>

```typescript
public putLowCode(value: GoogleChronicleParserLowCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleParserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---

##### `putVersionInfo` <a name="putVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo"></a>

```typescript
public putVersionInfo(value: GoogleChronicleParserVersionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---

##### `resetCbn` <a name="resetCbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn"></a>

```typescript
public resetCbn(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLowCode` <a name="resetLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode"></a>

```typescript
public resetLowCode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidatedOnEmptyLogs` <a name="resetValidatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs"></a>

```typescript
public resetValidatedOnEmptyLogs(): void
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped"></a>

```typescript
public resetValidationSkipped(): void
```

##### `resetVersionInfo` <a name="resetVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo"></a>

```typescript
public resetVersionInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

googleChronicleParser.GoogleChronicleParser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

googleChronicleParser.GoogleChronicleParser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

googleChronicleParser.GoogleChronicleParser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

googleChronicleParser.GoogleChronicleParser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleParser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs">changelogs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator">creator</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig">dynamicParsingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser">parser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension">parserExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage">releaseStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport">validationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage">validationStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput">cbnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput">logtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput">lowCodeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput">validatedOnEmptyLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput">validationSkippedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput">versionInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn">cbn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype">logtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `changelogs`<sup>Required</sup> <a name="changelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs"></a>

```typescript
public readonly changelogs: GoogleChronicleParserChangelogsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator"></a>

```typescript
public readonly creator: GoogleChronicleParserCreatorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a>

---

##### `dynamicParsingConfig`<sup>Required</sup> <a name="dynamicParsingConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig"></a>

```typescript
public readonly dynamicParsingConfig: string;
```

- *Type:* string

---

##### `lowCode`<sup>Required</sup> <a name="lowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode"></a>

```typescript
public readonly lowCode: GoogleChronicleParserLowCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser"></a>

```typescript
public readonly parser: string;
```

- *Type:* string

---

##### `parserExtension`<sup>Required</sup> <a name="parserExtension" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension"></a>

```typescript
public readonly parserExtension: string;
```

- *Type:* string

---

##### `releaseStage`<sup>Required</sup> <a name="releaseStage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage"></a>

```typescript
public readonly releaseStage: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleParserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport"></a>

```typescript
public readonly validationReport: string;
```

- *Type:* string

---

##### `validationStage`<sup>Required</sup> <a name="validationStage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage"></a>

```typescript
public readonly validationStage: string;
```

- *Type:* string

---

##### `versionInfo`<sup>Required</sup> <a name="versionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo"></a>

```typescript
public readonly versionInfo: GoogleChronicleParserVersionInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a>

---

##### `cbnInput`<sup>Optional</sup> <a name="cbnInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput"></a>

```typescript
public readonly cbnInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logtypeInput`<sup>Optional</sup> <a name="logtypeInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput"></a>

```typescript
public readonly logtypeInput: string;
```

- *Type:* string

---

##### `lowCodeInput`<sup>Optional</sup> <a name="lowCodeInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput"></a>

```typescript
public readonly lowCodeInput: GoogleChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleParserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---

##### `validatedOnEmptyLogsInput`<sup>Optional</sup> <a name="validatedOnEmptyLogsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput"></a>

```typescript
public readonly validatedOnEmptyLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput"></a>

```typescript
public readonly validationSkippedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionInfoInput`<sup>Optional</sup> <a name="versionInfoInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput"></a>

```typescript
public readonly versionInfoInput: GoogleChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---

##### `cbn`<sup>Required</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn"></a>

```typescript
public readonly cbn: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype"></a>

```typescript
public readonly logtype: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `validatedOnEmptyLogs`<sup>Required</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs"></a>

```typescript
public readonly validatedOnEmptyLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleParserChangelogs <a name="GoogleChronicleParserChangelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserChangelogs: googleChronicleParser.GoogleChronicleParserChangelogs = { ... }
```


### GoogleChronicleParserChangelogsEntries <a name="GoogleChronicleParserChangelogsEntries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserChangelogsEntries: googleChronicleParser.GoogleChronicleParserChangelogsEntries = { ... }
```


### GoogleChronicleParserConfig <a name="GoogleChronicleParserConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserConfig: googleChronicleParser.GoogleChronicleParserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype">logtype</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn">cbn</a></code> | <code>string</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#instance GoogleChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#location GoogleChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype"></a>

```typescript
public readonly logtype: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#logtype GoogleChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn"></a>

```typescript
public readonly cbn: string;
```

- *Type:* string

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#cbn GoogleChronicleParser#cbn}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#deletion_policy GoogleChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowCode`<sup>Optional</sup> <a name="lowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode"></a>

```typescript
public readonly lowCode: GoogleChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#low_code GoogleChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleParserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#timeouts GoogleChronicleParser#timeouts}

---

##### `validatedOnEmptyLogs`<sup>Optional</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```typescript
public readonly validatedOnEmptyLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validated_on_empty_logs GoogleChronicleParser#validated_on_empty_logs}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validation_skipped GoogleChronicleParser#validation_skipped}

---

##### `versionInfo`<sup>Optional</sup> <a name="versionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo"></a>

```typescript
public readonly versionInfo: GoogleChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#version_info GoogleChronicleParser#version_info}

---

### GoogleChronicleParserCreator <a name="GoogleChronicleParserCreator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserCreator: googleChronicleParser.GoogleChronicleParserCreator = { ... }
```


### GoogleChronicleParserLowCode <a name="GoogleChronicleParserLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserLowCode: googleChronicleParser.GoogleChronicleParserLowCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log">log</a></code> | <code>string</code> | The log used to create this low code parser in the UI. |

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: GoogleChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_extractors GoogleChronicleParser#field_extractors}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log GoogleChronicleParser#log}

---

### GoogleChronicleParserLowCodeFieldExtractors <a name="GoogleChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserLowCodeFieldExtractors: googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat">logFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#append_repeated_fields GoogleChronicleParser#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```typescript
public readonly extractors: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#extractors GoogleChronicleParser#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log_format GoogleChronicleParser#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#preprocess_config GoogleChronicleParser#preprocess_config}

---

### GoogleChronicleParserLowCodeFieldExtractorsExtractors <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserLowCodeFieldExtractorsExtractors: googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value">value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#destination_path GoogleChronicleParser#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_path GoogleChronicleParser#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_op GoogleChronicleParser#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_path GoogleChronicleParser#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_value GoogleChronicleParser#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#value GoogleChronicleParser#value}

---

### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserLowCodeFieldExtractorsPreprocessConfig: googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#grok_regex GoogleChronicleParser#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#target GoogleChronicleParser#target}

---

### GoogleChronicleParserTimeouts <a name="GoogleChronicleParserTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserTimeouts: googleChronicleParser.GoogleChronicleParserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}.

---

### GoogleChronicleParserVersionInfo <a name="GoogleChronicleParserVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

const googleChronicleParserVersionInfo: googleChronicleParser.GoogleChronicleParserVersionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```typescript
public readonly autoUpgradeDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#auto_upgrade_disabled GoogleChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleParserChangelogsEntriesList <a name="GoogleChronicleParserChangelogsEntriesList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserChangelogsEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserChangelogsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleParserChangelogsEntriesOutputReference <a name="GoogleChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage">changeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion">parserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeMessage`<sup>Required</sup> <a name="changeMessage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```typescript
public readonly changeMessage: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `parserVersion`<sup>Required</sup> <a name="parserVersion" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```typescript
public readonly parserVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserChangelogsEntries;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a>

---


### GoogleChronicleParserChangelogsList <a name="GoogleChronicleParserChangelogsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserChangelogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserChangelogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleParserChangelogsOutputReference <a name="GoogleChronicleParserChangelogsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserChangelogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries"></a>

```typescript
public readonly entries: GoogleChronicleParserChangelogsEntriesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserChangelogs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a>

---


### GoogleChronicleParserCreatorList <a name="GoogleChronicleParserCreatorList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserCreatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserCreatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleParserCreatorOutputReference <a name="GoogleChronicleParserCreatorOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserCreatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserCreator;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsList <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```typescript
public resetPreconditionOp(): void
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```typescript
public resetPreconditionPath(): void
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```typescript
public resetPreconditionValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```typescript
public readonly preconditionOpInput: string;
```

- *Type:* string

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```typescript
public readonly preconditionPathInput: string;
```

- *Type:* string

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```typescript
public readonly preconditionValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```typescript
public putExtractors(value: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```typescript
public putPreprocessConfig(value: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```typescript
public resetAppendRepeatedFields(): void
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```typescript
public resetExtractors(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```typescript
public resetPreprocessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```typescript
public readonly extractors: GoogleChronicleParserLowCodeFieldExtractorsExtractorsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```typescript
public readonly transformedCbnSnippet: string;
```

- *Type:* string

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```typescript
public readonly appendRepeatedFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```typescript
public readonly extractorsInput: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```typescript
public readonly preprocessConfigInput: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```typescript
public resetGrokRegex(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```typescript
public readonly grokRegexInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### GoogleChronicleParserLowCodeOutputReference <a name="GoogleChronicleParserLowCodeOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserLowCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog">resetLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```typescript
public putFieldExtractors(value: GoogleChronicleParserLowCodeFieldExtractors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```typescript
public resetFieldExtractors(): void
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog"></a>

```typescript
public resetLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput">logInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log">log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: GoogleChronicleParserLowCodeFieldExtractorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```typescript
public readonly fieldExtractorsInput: GoogleChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput"></a>

```typescript
public readonly logInput: string;
```

- *Type:* string

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---


### GoogleChronicleParserTimeoutsOutputReference <a name="GoogleChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---


### GoogleChronicleParserVersionInfoOutputReference <a name="GoogleChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer"></a>

```typescript
import { googleChronicleParser } from '@cdktn/provider-google-beta'

new googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser">latestParser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion">latestParserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable">rollbackAvailable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">autoUpgradeDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestParser`<sup>Required</sup> <a name="latestParser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```typescript
public readonly latestParser: string;
```

- *Type:* string

---

##### `latestParserVersion`<sup>Required</sup> <a name="latestParserVersion" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```typescript
public readonly latestParserVersion: string;
```

- *Type:* string

---

##### `rollbackAvailable`<sup>Required</sup> <a name="rollbackAvailable" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```typescript
public readonly rollbackAvailable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `autoUpgradeDisabledInput`<sup>Optional</sup> <a name="autoUpgradeDisabledInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```typescript
public readonly autoUpgradeDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```typescript
public readonly autoUpgradeDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---



