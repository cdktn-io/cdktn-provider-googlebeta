# `googleBigqueryRoutine` Submodule <a name="`googleBigqueryRoutine` Submodule" id="@cdktn/provider-google-beta.googleBigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryRoutine <a name="GoogleBigqueryRoutine" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutine(scope: Construct, id: string, config: GoogleBigqueryRoutineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putExternalRuntimeOptions">putExternalRuntimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putPythonOptions">putPythonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions">putRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions">putSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType">resetDataGovernanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel">resetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetExternalRuntimeOptions">resetExternalRuntimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries">resetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetPythonOptions">resetPythonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions">resetRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType">resetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType">resetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSecurityMode">resetSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions">resetSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments"></a>

```typescript
public putArguments(value: IResolvable | GoogleBigqueryRoutineArguments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---

##### `putExternalRuntimeOptions` <a name="putExternalRuntimeOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putExternalRuntimeOptions"></a>

```typescript
public putExternalRuntimeOptions(value: GoogleBigqueryRoutineExternalRuntimeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putExternalRuntimeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a>

---

##### `putPythonOptions` <a name="putPythonOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putPythonOptions"></a>

```typescript
public putPythonOptions(value: GoogleBigqueryRoutinePythonOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putPythonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a>

---

##### `putRemoteFunctionOptions` <a name="putRemoteFunctionOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions"></a>

```typescript
public putRemoteFunctionOptions(value: GoogleBigqueryRoutineRemoteFunctionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `putSparkOptions` <a name="putSparkOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions"></a>

```typescript
public putSparkOptions(value: GoogleBigqueryRoutineSparkOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryRoutineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetDataGovernanceType` <a name="resetDataGovernanceType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType"></a>

```typescript
public resetDataGovernanceType(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeterminismLevel` <a name="resetDeterminismLevel" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel"></a>

```typescript
public resetDeterminismLevel(): void
```

##### `resetExternalRuntimeOptions` <a name="resetExternalRuntimeOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetExternalRuntimeOptions"></a>

```typescript
public resetExternalRuntimeOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportedLibraries` <a name="resetImportedLibraries" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries"></a>

```typescript
public resetImportedLibraries(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPythonOptions` <a name="resetPythonOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetPythonOptions"></a>

```typescript
public resetPythonOptions(): void
```

##### `resetRemoteFunctionOptions` <a name="resetRemoteFunctionOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions"></a>

```typescript
public resetRemoteFunctionOptions(): void
```

##### `resetReturnTableType` <a name="resetReturnTableType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType"></a>

```typescript
public resetReturnTableType(): void
```

##### `resetReturnType` <a name="resetReturnType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType"></a>

```typescript
public resetReturnType(): void
```

##### `resetSecurityMode` <a name="resetSecurityMode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSecurityMode"></a>

```typescript
public resetSecurityMode(): void
```

##### `resetSparkOptions` <a name="resetSparkOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions"></a>

```typescript
public resetSparkOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryRoutine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBigqueryRoutine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryRoutine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryRoutine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryRoutine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments">arguments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.externalRuntimeOptions">externalRuntimeOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference">GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.pythonOptions">pythonOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference">GoogleBigqueryRoutinePythonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput">argumentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput">dataGovernanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput">definitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput">determinismLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.externalRuntimeOptionsInput">externalRuntimeOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput">importedLibrariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.pythonOptionsInput">pythonOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput">remoteFunctionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput">returnTableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput">returnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput">routineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput">routineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.securityModeInput">securityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput">sparkOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType">dataGovernanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody">definitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel">determinismLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries">importedLibraries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType">returnTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId">routineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType">routineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.securityMode">securityMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments"></a>

```typescript
public readonly arguments: GoogleBigqueryRoutineArgumentsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `externalRuntimeOptions`<sup>Required</sup> <a name="externalRuntimeOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.externalRuntimeOptions"></a>

```typescript
public readonly externalRuntimeOptions: GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference">GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference</a>

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `pythonOptions`<sup>Required</sup> <a name="pythonOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.pythonOptions"></a>

```typescript
public readonly pythonOptions: GoogleBigqueryRoutinePythonOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference">GoogleBigqueryRoutinePythonOptionsOutputReference</a>

---

##### `remoteFunctionOptions`<sup>Required</sup> <a name="remoteFunctionOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions"></a>

```typescript
public readonly remoteFunctionOptions: GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a>

---

##### `sparkOptions`<sup>Required</sup> <a name="sparkOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions"></a>

```typescript
public readonly sparkOptions: GoogleBigqueryRoutineSparkOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryRoutineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---

##### `dataGovernanceTypeInput`<sup>Optional</sup> <a name="dataGovernanceTypeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput"></a>

```typescript
public readonly dataGovernanceTypeInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `definitionBodyInput`<sup>Optional</sup> <a name="definitionBodyInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput"></a>

```typescript
public readonly definitionBodyInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `determinismLevelInput`<sup>Optional</sup> <a name="determinismLevelInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput"></a>

```typescript
public readonly determinismLevelInput: string;
```

- *Type:* string

---

##### `externalRuntimeOptionsInput`<sup>Optional</sup> <a name="externalRuntimeOptionsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.externalRuntimeOptionsInput"></a>

```typescript
public readonly externalRuntimeOptionsInput: GoogleBigqueryRoutineExternalRuntimeOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importedLibrariesInput`<sup>Optional</sup> <a name="importedLibrariesInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput"></a>

```typescript
public readonly importedLibrariesInput: string[];
```

- *Type:* string[]

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pythonOptionsInput`<sup>Optional</sup> <a name="pythonOptionsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.pythonOptionsInput"></a>

```typescript
public readonly pythonOptionsInput: GoogleBigqueryRoutinePythonOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a>

---

##### `remoteFunctionOptionsInput`<sup>Optional</sup> <a name="remoteFunctionOptionsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput"></a>

```typescript
public readonly remoteFunctionOptionsInput: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `returnTableTypeInput`<sup>Optional</sup> <a name="returnTableTypeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput"></a>

```typescript
public readonly returnTableTypeInput: string;
```

- *Type:* string

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput"></a>

```typescript
public readonly returnTypeInput: string;
```

- *Type:* string

---

##### `routineIdInput`<sup>Optional</sup> <a name="routineIdInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput"></a>

```typescript
public readonly routineIdInput: string;
```

- *Type:* string

---

##### `routineTypeInput`<sup>Optional</sup> <a name="routineTypeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput"></a>

```typescript
public readonly routineTypeInput: string;
```

- *Type:* string

---

##### `securityModeInput`<sup>Optional</sup> <a name="securityModeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.securityModeInput"></a>

```typescript
public readonly securityModeInput: string;
```

- *Type:* string

---

##### `sparkOptionsInput`<sup>Optional</sup> <a name="sparkOptionsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput"></a>

```typescript
public readonly sparkOptionsInput: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryRoutineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---

##### `dataGovernanceType`<sup>Required</sup> <a name="dataGovernanceType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType"></a>

```typescript
public readonly dataGovernanceType: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `determinismLevel`<sup>Required</sup> <a name="determinismLevel" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel"></a>

```typescript
public readonly determinismLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importedLibraries`<sup>Required</sup> <a name="importedLibraries" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries"></a>

```typescript
public readonly importedLibraries: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `returnTableType`<sup>Required</sup> <a name="returnTableType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType"></a>

```typescript
public readonly returnTableType: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId"></a>

```typescript
public readonly routineId: string;
```

- *Type:* string

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryRoutineArguments <a name="GoogleBigqueryRoutineArguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineArguments: googleBigqueryRoutine.GoogleBigqueryRoutineArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind">argumentKind</a></code> | <code>string</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType">dataType</a></code> | <code>string</code> | A JSON schema for the data type. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode">mode</a></code> | <code>string</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name">name</a></code> | <code>string</code> | The name of this argument. Can be absent for function return argument. |

---

##### `argumentKind`<sup>Optional</sup> <a name="argumentKind" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind"></a>

```typescript
public readonly argumentKind: string;
```

- *Type:* string

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#argument_kind GoogleBigqueryRoutine#argument_kind}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#data_type GoogleBigqueryRoutine#data_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#mode GoogleBigqueryRoutine#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#name GoogleBigqueryRoutine#name}

---

### GoogleBigqueryRoutineConfig <a name="GoogleBigqueryRoutineConfig" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineConfig: googleBigqueryRoutine.GoogleBigqueryRoutineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody">definitionBody</a></code> | <code>string</code> | The body of the routine. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId">routineId</a></code> | <code>string</code> | The ID of the the routine. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType">routineType</a></code> | <code>string</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments">arguments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | arguments block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType">dataGovernanceType</a></code> | <code>string</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description">description</a></code> | <code>string</code> | The description of the routine if defined. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel">determinismLevel</a></code> | <code>string</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.externalRuntimeOptions">externalRuntimeOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a></code> | external_runtime_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries">importedLibraries</a></code> | <code>string[]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language">language</a></code> | <code>string</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.pythonOptions">pythonOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a></code> | python_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType">returnTableType</a></code> | <code>string</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType">returnType</a></code> | <code>string</code> | A JSON schema for the return type. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.securityMode">securityMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#dataset_id GoogleBigqueryRoutine#dataset_id}

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#definition_body GoogleBigqueryRoutine#definition_body}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId"></a>

```typescript
public readonly routineId: string;
```

- *Type:* string

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#routine_id GoogleBigqueryRoutine#routine_id}

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#routine_type GoogleBigqueryRoutine#routine_type}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments"></a>

```typescript
public readonly arguments: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#arguments GoogleBigqueryRoutine#arguments}

---

##### `dataGovernanceType`<sup>Optional</sup> <a name="dataGovernanceType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType"></a>

```typescript
public readonly dataGovernanceType: string;
```

- *Type:* string

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#data_governance_type GoogleBigqueryRoutine#data_governance_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#deletion_policy GoogleBigqueryRoutine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#description GoogleBigqueryRoutine#description}

---

##### `determinismLevel`<sup>Optional</sup> <a name="determinismLevel" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel"></a>

```typescript
public readonly determinismLevel: string;
```

- *Type:* string

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#determinism_level GoogleBigqueryRoutine#determinism_level}

---

##### `externalRuntimeOptions`<sup>Optional</sup> <a name="externalRuntimeOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.externalRuntimeOptions"></a>

```typescript
public readonly externalRuntimeOptions: GoogleBigqueryRoutineExternalRuntimeOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a>

external_runtime_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#external_runtime_options GoogleBigqueryRoutine#external_runtime_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedLibraries`<sup>Optional</sup> <a name="importedLibraries" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries"></a>

```typescript
public readonly importedLibraries: string[];
```

- *Type:* string[]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#imported_libraries GoogleBigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#language GoogleBigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}.

---

##### `pythonOptions`<sup>Optional</sup> <a name="pythonOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.pythonOptions"></a>

```typescript
public readonly pythonOptions: GoogleBigqueryRoutinePythonOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a>

python_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#python_options GoogleBigqueryRoutine#python_options}

---

##### `remoteFunctionOptions`<sup>Optional</sup> <a name="remoteFunctionOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions"></a>

```typescript
public readonly remoteFunctionOptions: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#remote_function_options GoogleBigqueryRoutine#remote_function_options}

---

##### `returnTableType`<sup>Optional</sup> <a name="returnTableType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType"></a>

```typescript
public readonly returnTableType: string;
```

- *Type:* string

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#return_table_type GoogleBigqueryRoutine#return_table_type}

---

##### `returnType`<sup>Optional</sup> <a name="returnType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#return_type GoogleBigqueryRoutine#return_type}

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

Optional.

The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration. Possible values: ["DEFINER", "INVOKER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#security_mode GoogleBigqueryRoutine#security_mode}

---

##### `sparkOptions`<sup>Optional</sup> <a name="sparkOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions"></a>

```typescript
public readonly sparkOptions: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#spark_options GoogleBigqueryRoutine#spark_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryRoutineTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#timeouts GoogleBigqueryRoutine#timeouts}

---

### GoogleBigqueryRoutineExternalRuntimeOptions <a name="GoogleBigqueryRoutineExternalRuntimeOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineExternalRuntimeOptions: googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.containerCpu">containerCpu</a></code> | <code>number</code> | Amount of CPU provisioned for a Python UDF container instance. For more information, see [Configure container limits for Python UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits). |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.containerMemory">containerMemory</a></code> | <code>string</code> | Amount of memory provisioned for a Python UDF container instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | Maximum number of rows in each batch sent to the external runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.runtimeConnection">runtimeConnection</a></code> | <code>string</code> | Fully qualified name of the connection whose service account will be used to execute the code in the container. Format: '"projects/{project_id}/locations/{location_id}/connections/{connection_id}"'. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Language runtime version. Example: 'python-3.11'. |

---

##### `containerCpu`<sup>Optional</sup> <a name="containerCpu" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.containerCpu"></a>

```typescript
public readonly containerCpu: number;
```

- *Type:* number

Amount of CPU provisioned for a Python UDF container instance. For more information, see [Configure container limits for Python UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#container_cpu GoogleBigqueryRoutine#container_cpu}

---

##### `containerMemory`<sup>Optional</sup> <a name="containerMemory" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.containerMemory"></a>

```typescript
public readonly containerMemory: string;
```

- *Type:* string

Amount of memory provisioned for a Python UDF container instance.

Format:
{number}{unit} where unit is one of "M", "G", "Mi" and "Gi" (e.g. 1G,
512Mi). If not specified, the default value is 512Mi. For more information,
see [Configure container limits for Python
UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#container_memory GoogleBigqueryRoutine#container_memory}

---

##### `maxBatchingRows`<sup>Optional</sup> <a name="maxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

Maximum number of rows in each batch sent to the external runtime.

If
absent or if 0, BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#max_batching_rows GoogleBigqueryRoutine#max_batching_rows}

---

##### `runtimeConnection`<sup>Optional</sup> <a name="runtimeConnection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.runtimeConnection"></a>

```typescript
public readonly runtimeConnection: string;
```

- *Type:* string

Fully qualified name of the connection whose service account will be used to execute the code in the container. Format: '"projects/{project_id}/locations/{location_id}/connections/{connection_id}"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#runtime_connection GoogleBigqueryRoutine#runtime_connection}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Language runtime version. Example: 'python-3.11'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#runtime_version GoogleBigqueryRoutine#runtime_version}

---

### GoogleBigqueryRoutinePythonOptions <a name="GoogleBigqueryRoutinePythonOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutinePythonOptions: googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions.property.entryPoint">entryPoint</a></code> | <code>string</code> | The name of the function defined in Python code as the entry point when the Python UDF is invoked. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions.property.packages">packages</a></code> | <code>string[]</code> | A list of Python package names along with versions to be installed. Example: ["pandas>=2.1", "google-cloud-translate==3.11"]. For more information, see [Use third-party packages](https://cloud.google.com/bigquery/docs/user-defined-functions-python#third-party-packages). |

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

The name of the function defined in Python code as the entry point when the Python UDF is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#entry_point GoogleBigqueryRoutine#entry_point}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

A list of Python package names along with versions to be installed. Example: ["pandas>=2.1", "google-cloud-translate==3.11"]. For more information, see [Use third-party packages](https://cloud.google.com/bigquery/docs/user-defined-functions-python#third-party-packages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#packages GoogleBigqueryRoutine#packages}

---

### GoogleBigqueryRoutineRemoteFunctionOptions <a name="GoogleBigqueryRoutineRemoteFunctionOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineRemoteFunctionOptions: googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection">connection</a></code> | <code>string</code> | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint">endpoint</a></code> | <code>string</code> | Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | Max number of rows in each batch sent to the remote service. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext">userDefinedContext</a></code> | <code>{[ key: string ]: string}</code> | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service.

Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#endpoint GoogleBigqueryRoutine#endpoint}

---

##### `maxBatchingRows`<sup>Optional</sup> <a name="maxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

Max number of rows in each batch sent to the remote service.

If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#max_batching_rows GoogleBigqueryRoutine#max_batching_rows}

---

##### `userDefinedContext`<sup>Optional</sup> <a name="userDefinedContext" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext"></a>

```typescript
public readonly userDefinedContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service.

The total number of bytes of keys and values must be less than 8KB.

An object containing a list of "key": value pairs. Example:
'{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#user_defined_context GoogleBigqueryRoutine#user_defined_context}

---

### GoogleBigqueryRoutineSparkOptions <a name="GoogleBigqueryRoutineSparkOptions" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineSparkOptions: googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Archive files to be extracted into the working directory of each executor. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection">connection</a></code> | <code>string</code> | Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage">containerImage</a></code> | <code>string</code> | Custom container image for the runtime environment. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris">fileUris</a></code> | <code>string[]</code> | Files to be placed in the working directory of each executor. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris">jarUris</a></code> | <code>string[]</code> | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass">mainClass</a></code> | <code>string</code> | The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri">mainFileUri</a></code> | <code>string</code> | The main file/jar URI of the Spark application. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris">pyFileUris</a></code> | <code>string[]</code> | Python files to be placed on the PYTHONPATH for PySpark application. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Runtime version. If not specified, the default runtime version is used. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Archive files to be extracted into the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#archive_uris GoogleBigqueryRoutine#archive_uris}

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

Custom container image for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#container_image GoogleBigqueryRoutine#container_image}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Files to be placed in the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#file_uris GoogleBigqueryRoutine#file_uris}

---

##### `jarUris`<sup>Optional</sup> <a name="jarUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris"></a>

```typescript
public readonly jarUris: string[];
```

- *Type:* string[]

JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#jar_uris GoogleBigqueryRoutine#jar_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#main_class GoogleBigqueryRoutine#main_class}

---

##### `mainFileUri`<sup>Optional</sup> <a name="mainFileUri" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri"></a>

```typescript
public readonly mainFileUri: string;
```

- *Type:* string

The main file/jar URI of the Spark application.

Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#main_file_uri GoogleBigqueryRoutine#main_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.

For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#properties GoogleBigqueryRoutine#properties}

---

##### `pyFileUris`<sup>Optional</sup> <a name="pyFileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris"></a>

```typescript
public readonly pyFileUris: string[];
```

- *Type:* string[]

Python files to be placed on the PYTHONPATH for PySpark application.

Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#py_file_uris GoogleBigqueryRoutine#py_file_uris}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Runtime version. If not specified, the default runtime version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#runtime_version GoogleBigqueryRoutine#runtime_version}

---

### GoogleBigqueryRoutineTimeouts <a name="GoogleBigqueryRoutineTimeouts" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

const googleBigqueryRoutineTimeouts: googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryRoutineArgumentsList <a name="GoogleBigqueryRoutineArgumentsList" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get"></a>

```typescript
public get(index: number): GoogleBigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineArguments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>[]

---


### GoogleBigqueryRoutineArgumentsOutputReference <a name="GoogleBigqueryRoutineArgumentsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind">resetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgumentKind` <a name="resetArgumentKind" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```typescript
public resetArgumentKind(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput">argumentKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind">argumentKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentKindInput`<sup>Optional</sup> <a name="argumentKindInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```typescript
public readonly argumentKindInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `argumentKind`<sup>Required</sup> <a name="argumentKind" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```typescript
public readonly argumentKind: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineArguments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>

---


### GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference <a name="GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetContainerCpu">resetContainerCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetContainerMemory">resetContainerMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetMaxBatchingRows">resetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetRuntimeConnection">resetRuntimeConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerCpu` <a name="resetContainerCpu" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetContainerCpu"></a>

```typescript
public resetContainerCpu(): void
```

##### `resetContainerMemory` <a name="resetContainerMemory" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetContainerMemory"></a>

```typescript
public resetContainerMemory(): void
```

##### `resetMaxBatchingRows` <a name="resetMaxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetMaxBatchingRows"></a>

```typescript
public resetMaxBatchingRows(): void
```

##### `resetRuntimeConnection` <a name="resetRuntimeConnection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetRuntimeConnection"></a>

```typescript
public resetRuntimeConnection(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerCpuInput">containerCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerMemoryInput">containerMemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.maxBatchingRowsInput">maxBatchingRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeConnectionInput">runtimeConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerCpu">containerCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerMemory">containerMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeConnection">runtimeConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerCpuInput`<sup>Optional</sup> <a name="containerCpuInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerCpuInput"></a>

```typescript
public readonly containerCpuInput: number;
```

- *Type:* number

---

##### `containerMemoryInput`<sup>Optional</sup> <a name="containerMemoryInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerMemoryInput"></a>

```typescript
public readonly containerMemoryInput: string;
```

- *Type:* string

---

##### `maxBatchingRowsInput`<sup>Optional</sup> <a name="maxBatchingRowsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.maxBatchingRowsInput"></a>

```typescript
public readonly maxBatchingRowsInput: string;
```

- *Type:* string

---

##### `runtimeConnectionInput`<sup>Optional</sup> <a name="runtimeConnectionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeConnectionInput"></a>

```typescript
public readonly runtimeConnectionInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `containerCpu`<sup>Required</sup> <a name="containerCpu" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerCpu"></a>

```typescript
public readonly containerCpu: number;
```

- *Type:* number

---

##### `containerMemory`<sup>Required</sup> <a name="containerMemory" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.containerMemory"></a>

```typescript
public readonly containerMemory: string;
```

- *Type:* string

---

##### `maxBatchingRows`<sup>Required</sup> <a name="maxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

---

##### `runtimeConnection`<sup>Required</sup> <a name="runtimeConnection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeConnection"></a>

```typescript
public readonly runtimeConnection: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutineExternalRuntimeOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineExternalRuntimeOptions">GoogleBigqueryRoutineExternalRuntimeOptions</a>

---


### GoogleBigqueryRoutinePythonOptionsOutputReference <a name="GoogleBigqueryRoutinePythonOptionsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.resetPackages">resetPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPackages` <a name="resetPackages" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.resetPackages"></a>

```typescript
public resetPackages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.packagesInput">packagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.entryPoint">entryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string;
```

- *Type:* string

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.packagesInput"></a>

```typescript
public readonly packagesInput: string[];
```

- *Type:* string[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutinePythonOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutinePythonOptions">GoogleBigqueryRoutinePythonOptions</a>

---


### GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference <a name="GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows">resetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext">resetUserDefinedContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnection` <a name="resetConnection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetMaxBatchingRows` <a name="resetMaxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows"></a>

```typescript
public resetMaxBatchingRows(): void
```

##### `resetUserDefinedContext` <a name="resetUserDefinedContext" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext"></a>

```typescript
public resetUserDefinedContext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput">maxBatchingRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput">userDefinedContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows">maxBatchingRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext">userDefinedContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `maxBatchingRowsInput`<sup>Optional</sup> <a name="maxBatchingRowsInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput"></a>

```typescript
public readonly maxBatchingRowsInput: string;
```

- *Type:* string

---

##### `userDefinedContextInput`<sup>Optional</sup> <a name="userDefinedContextInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput"></a>

```typescript
public readonly userDefinedContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `maxBatchingRows`<sup>Required</sup> <a name="maxBatchingRows" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows"></a>

```typescript
public readonly maxBatchingRows: string;
```

- *Type:* string

---

##### `userDefinedContext`<sup>Required</sup> <a name="userDefinedContext" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext"></a>

```typescript
public readonly userDefinedContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutineRemoteFunctionOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---


### GoogleBigqueryRoutineSparkOptionsOutputReference <a name="GoogleBigqueryRoutineSparkOptionsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris">resetJarUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri">resetMainFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris">resetPyFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetConnection` <a name="resetConnection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetJarUris` <a name="resetJarUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris"></a>

```typescript
public resetJarUris(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetMainFileUri` <a name="resetMainFileUri" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri"></a>

```typescript
public resetMainFileUri(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPyFileUris` <a name="resetPyFileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris"></a>

```typescript
public resetPyFileUris(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput">jarUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput">mainFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput">pyFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris">jarUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri">mainFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris">pyFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: string;
```

- *Type:* string

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: string;
```

- *Type:* string

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `jarUrisInput`<sup>Optional</sup> <a name="jarUrisInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput"></a>

```typescript
public readonly jarUrisInput: string[];
```

- *Type:* string[]

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `mainFileUriInput`<sup>Optional</sup> <a name="mainFileUriInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput"></a>

```typescript
public readonly mainFileUriInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pyFileUrisInput`<sup>Optional</sup> <a name="pyFileUrisInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput"></a>

```typescript
public readonly pyFileUrisInput: string[];
```

- *Type:* string[]

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `jarUris`<sup>Required</sup> <a name="jarUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris"></a>

```typescript
public readonly jarUris: string[];
```

- *Type:* string[]

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `mainFileUri`<sup>Required</sup> <a name="mainFileUri" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri"></a>

```typescript
public readonly mainFileUri: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pyFileUris`<sup>Required</sup> <a name="pyFileUris" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris"></a>

```typescript
public readonly pyFileUris: string[];
```

- *Type:* string[]

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryRoutineSparkOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---


### GoogleBigqueryRoutineTimeoutsOutputReference <a name="GoogleBigqueryRoutineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryRoutine } from '@cdktn/provider-google-beta'

new googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryRoutineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---



