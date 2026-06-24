# `googleChronicleParserExtension` Submodule <a name="`googleChronicleParserExtension` Submodule" id="@cdktn/provider-google-beta.googleChronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleParserExtension <a name="GoogleChronicleParserExtension" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtension(scope: Construct, id: string, config: GoogleChronicleParserExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig">GoogleChronicleParserExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig">GoogleChronicleParserExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putDynamicParsing">putDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetCbnSnippet">resetCbnSnippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetDynamicParsing">resetDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicParsing` <a name="putDynamicParsing" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putDynamicParsing"></a>

```typescript
public putDynamicParsing(value: GoogleChronicleParserExtensionDynamicParsing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putDynamicParsing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a>

---

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putFieldExtractors"></a>

```typescript
public putFieldExtractors(value: GoogleChronicleParserExtensionFieldExtractors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleParserExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a>

---

##### `resetCbnSnippet` <a name="resetCbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetCbnSnippet"></a>

```typescript
public resetCbnSnippet(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDynamicParsing` <a name="resetDynamicParsing" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetDynamicParsing"></a>

```typescript
public resetDynamicParsing(): void
```

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetFieldExtractors"></a>

```typescript
public resetFieldExtractors(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetLog"></a>

```typescript
public resetLog(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.resetValidationSkipped"></a>

```typescript
public resetValidationSkipped(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isConstruct"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

googleChronicleParserExtension.GoogleChronicleParserExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformElement"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformResource"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleParserExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference">GoogleChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.extensionValidationReport">extensionValidationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference">GoogleChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.lastLiveTime">lastLiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.parserextension">parserextension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.stateLastChangedTime">stateLastChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference">GoogleChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationReport">validationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cbnSnippetInput">cbnSnippetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dynamicParsingInput">dynamicParsingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logInput">logInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationSkippedInput">validationSkippedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cbnSnippet">cbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.log">log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dynamicParsing`<sup>Required</sup> <a name="dynamicParsing" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dynamicParsing"></a>

```typescript
public readonly dynamicParsing: GoogleChronicleParserExtensionDynamicParsingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference">GoogleChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `extensionValidationReport`<sup>Required</sup> <a name="extensionValidationReport" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.extensionValidationReport"></a>

```typescript
public readonly extensionValidationReport: string;
```

- *Type:* string

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: GoogleChronicleParserExtensionFieldExtractorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference">GoogleChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `lastLiveTime`<sup>Required</sup> <a name="lastLiveTime" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.lastLiveTime"></a>

```typescript
public readonly lastLiveTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parserextension`<sup>Required</sup> <a name="parserextension" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.parserextension"></a>

```typescript
public readonly parserextension: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateLastChangedTime`<sup>Required</sup> <a name="stateLastChangedTime" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.stateLastChangedTime"></a>

```typescript
public readonly stateLastChangedTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleParserExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference">GoogleChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationReport"></a>

```typescript
public readonly validationReport: string;
```

- *Type:* string

---

##### `cbnSnippetInput`<sup>Optional</sup> <a name="cbnSnippetInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cbnSnippetInput"></a>

```typescript
public readonly cbnSnippetInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `dynamicParsingInput`<sup>Optional</sup> <a name="dynamicParsingInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.dynamicParsingInput"></a>

```typescript
public readonly dynamicParsingInput: GoogleChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.fieldExtractorsInput"></a>

```typescript
public readonly fieldExtractorsInput: GoogleChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logInput"></a>

```typescript
public readonly logInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleParserExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a>

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationSkippedInput"></a>

```typescript
public readonly validationSkippedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cbnSnippet`<sup>Required</sup> <a name="cbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.cbnSnippet"></a>

```typescript
public readonly cbnSnippet: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleParserExtensionConfig <a name="GoogleChronicleParserExtensionConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionConfig: googleChronicleParserExtension.GoogleChronicleParserExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.logType">logType</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.cbnSnippet">cbnSnippet</a></code> | <code>string</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#id GoogleChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.log">log</a></code> | <code>string</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#project GoogleChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#instance GoogleChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#location GoogleChronicleParserExtension#location}

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#log_type GoogleChronicleParserExtension#log_type}

---

##### `cbnSnippet`<sup>Optional</sup> <a name="cbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.cbnSnippet"></a>

```typescript
public readonly cbnSnippet: string;
```

- *Type:* string

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#cbn_snippet GoogleChronicleParserExtension#cbn_snippet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#deletion_policy GoogleChronicleParserExtension#deletion_policy}

---

##### `dynamicParsing`<sup>Optional</sup> <a name="dynamicParsing" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.dynamicParsing"></a>

```typescript
public readonly dynamicParsing: GoogleChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#dynamic_parsing GoogleChronicleParserExtension#dynamic_parsing}

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: GoogleChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#field_extractors GoogleChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#id GoogleChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#log GoogleChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#project GoogleChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleParserExtensionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#timeouts GoogleChronicleParserExtension#timeouts}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionConfig.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#validation_skipped GoogleChronicleParserExtension#validation_skipped}

---

### GoogleChronicleParserExtensionDynamicParsing <a name="GoogleChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionDynamicParsing: googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing.property.optedFields">optedFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | opted_fields block. |

---

##### `optedFields`<sup>Optional</sup> <a name="optedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```typescript
public readonly optedFields: IResolvable | GoogleChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#opted_fields GoogleChronicleParserExtension#opted_fields}

---

### GoogleChronicleParserExtensionDynamicParsingOptedFields <a name="GoogleChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionDynamicParsingOptedFields: googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields.property.path">path</a></code> | <code>string</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">sampleValue</a></code> | <code>string</code> | Sample value of the log field. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#path GoogleChronicleParserExtension#path}

---

##### `sampleValue`<sup>Optional</sup> <a name="sampleValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```typescript
public readonly sampleValue: string;
```

- *Type:* string

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#sample_value GoogleChronicleParserExtension#sample_value}

---

### GoogleChronicleParserExtensionFieldExtractors <a name="GoogleChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionFieldExtractors: googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.logFormat">logFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#append_repeated_fields GoogleChronicleParserExtension#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.extractors"></a>

```typescript
public readonly extractors: IResolvable | GoogleChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#extractors GoogleChronicleParserExtension#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#log_format GoogleChronicleParserExtension#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#preprocess_config GoogleChronicleParserExtension#preprocess_config}

---

### GoogleChronicleParserExtensionFieldExtractorsExtractors <a name="GoogleChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionFieldExtractorsExtractors: googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.value">value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#destination_path GoogleChronicleParserExtension#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#field_path GoogleChronicleParserExtension#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#precondition_op GoogleChronicleParserExtension#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#precondition_path GoogleChronicleParserExtension#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#precondition_value GoogleChronicleParserExtension#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#value GoogleChronicleParserExtension#value}

---

### GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionFieldExtractorsPreprocessConfig: googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#grok_regex GoogleChronicleParserExtension#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#target GoogleChronicleParserExtension#target}

---

### GoogleChronicleParserExtensionTimeouts <a name="GoogleChronicleParserExtensionTimeouts" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

const googleChronicleParserExtensionTimeouts: googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#create GoogleChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#delete GoogleChronicleParserExtension#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#create GoogleChronicleParserExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_parser_extension#delete GoogleChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleParserExtensionDynamicParsingOptedFieldsList <a name="GoogleChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]

---


### GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">resetSampleValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSampleValue` <a name="resetSampleValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```typescript
public resetSampleValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">sampleValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">sampleValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sampleValueInput`<sup>Optional</sup> <a name="sampleValueInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```typescript
public readonly sampleValueInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sampleValue`<sup>Required</sup> <a name="sampleValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```typescript
public readonly sampleValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserExtensionDynamicParsingOptedFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>

---


### GoogleChronicleParserExtensionDynamicParsingOutputReference <a name="GoogleChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">putOptedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">resetOptedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptedFields` <a name="putOptedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```typescript
public putOptedFields(value: IResolvable | GoogleChronicleParserExtensionDynamicParsingOptedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `resetOptedFields` <a name="resetOptedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```typescript
public resetOptedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">optedFields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList">GoogleChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">optedFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optedFields`<sup>Required</sup> <a name="optedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```typescript
public readonly optedFields: GoogleChronicleParserExtensionDynamicParsingOptedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFieldsList">GoogleChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `optedFieldsInput`<sup>Optional</sup> <a name="optedFieldsInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```typescript
public readonly optedFieldsInput: IResolvable | GoogleChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOptedFields">GoogleChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionDynamicParsing">GoogleChronicleParserExtensionDynamicParsing</a>

---


### GoogleChronicleParserExtensionFieldExtractorsExtractorsList <a name="GoogleChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```typescript
public get(index: number): GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]

---


### GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```typescript
public resetPreconditionOp(): void
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```typescript
public resetPreconditionPath(): void
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```typescript
public resetPreconditionValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```typescript
public readonly preconditionOpInput: string;
```

- *Type:* string

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```typescript
public readonly preconditionPathInput: string;
```

- *Type:* string

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```typescript
public readonly preconditionValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserExtensionFieldExtractorsExtractors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>

---


### GoogleChronicleParserExtensionFieldExtractorsOutputReference <a name="GoogleChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```typescript
public putExtractors(value: IResolvable | GoogleChronicleParserExtensionFieldExtractorsExtractors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```typescript
public putPreprocessConfig(value: GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```typescript
public resetAppendRepeatedFields(): void
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```typescript
public resetExtractors(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```typescript
public resetPreprocessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList">GoogleChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```typescript
public readonly extractors: GoogleChronicleParserExtensionFieldExtractorsExtractorsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractorsList">GoogleChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```typescript
public readonly transformedCbnSnippet: string;
```

- *Type:* string

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```typescript
public readonly appendRepeatedFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```typescript
public readonly extractorsInput: IResolvable | GoogleChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsExtractors">GoogleChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```typescript
public readonly preprocessConfigInput: GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractors">GoogleChronicleParserExtensionFieldExtractors</a>

---


### GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```typescript
public resetGrokRegex(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```typescript
public readonly grokRegexInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig">GoogleChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### GoogleChronicleParserExtensionTimeoutsOutputReference <a name="GoogleChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleParserExtension } from '@cdktn/provider-google-beta'

new googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleParserExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParserExtension.GoogleChronicleParserExtensionTimeouts">GoogleChronicleParserExtensionTimeouts</a>

---



