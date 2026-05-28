# `googleDialogflowCxEntityType` Submodule <a name="`googleDialogflowCxEntityType` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxEntityType <a name="GoogleDialogflowCxEntityType" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityType(scope: Construct, id: string, config: GoogleDialogflowCxEntityTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig">GoogleDialogflowCxEntityTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig">GoogleDialogflowCxEntityTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases">putExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode">resetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction">resetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases">resetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact">resetRedact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntities` <a name="putEntities" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities"></a>

```typescript
public putEntities(value: IResolvable | GoogleDialogflowCxEntityTypeEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]

---

##### `putExcludedPhrases` <a name="putExcludedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases"></a>

```typescript
public putExcludedPhrases(value: IResolvable | GoogleDialogflowCxEntityTypeExcludedPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxEntityTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---

##### `resetAutoExpansionMode` <a name="resetAutoExpansionMode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode"></a>

```typescript
public resetAutoExpansionMode(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnableFuzzyExtraction` <a name="resetEnableFuzzyExtraction" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```typescript
public resetEnableFuzzyExtraction(): void
```

##### `resetExcludedPhrases` <a name="resetExcludedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases"></a>

```typescript
public resetExcludedPhrases(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetRedact` <a name="resetRedact" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact"></a>

```typescript
public resetRedact(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxEntityType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowCxEntityType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxEntityType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases">excludedPhrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput">autoExpansionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput">enableFuzzyExtractionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput">entitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput">excludedPhrasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput">redactInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode">autoExpansionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact">redact</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities"></a>

```typescript
public readonly entities: GoogleDialogflowCxEntityTypeEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a>

---

##### `excludedPhrases`<sup>Required</sup> <a name="excludedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases"></a>

```typescript
public readonly excludedPhrases: GoogleDialogflowCxEntityTypeExcludedPhrasesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxEntityTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `autoExpansionModeInput`<sup>Optional</sup> <a name="autoExpansionModeInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput"></a>

```typescript
public readonly autoExpansionModeInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableFuzzyExtractionInput`<sup>Optional</sup> <a name="enableFuzzyExtractionInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```typescript
public readonly enableFuzzyExtractionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: IResolvable | GoogleDialogflowCxEntityTypeEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]

---

##### `excludedPhrasesInput`<sup>Optional</sup> <a name="excludedPhrasesInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput"></a>

```typescript
public readonly excludedPhrasesInput: IResolvable | GoogleDialogflowCxEntityTypeExcludedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput"></a>

```typescript
public readonly redactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxEntityTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---

##### `autoExpansionMode`<sup>Required</sup> <a name="autoExpansionMode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode"></a>

```typescript
public readonly autoExpansionMode: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableFuzzyExtraction`<sup>Required</sup> <a name="enableFuzzyExtraction" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```typescript
public readonly enableFuzzyExtraction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxEntityTypeConfig <a name="GoogleDialogflowCxEntityTypeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

const googleDialogflowCxEntityTypeConfig: googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities">entities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]</code> | entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind">kind</a></code> | <code>string</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode">autoExpansionMode</a></code> | <code>string</code> | Represents kinds of entities. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases">excludedPhrases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]</code> | excluded_phrases block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact">redact</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#display_name GoogleDialogflowCxEntityType#display_name}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities"></a>

```typescript
public readonly entities: IResolvable | GoogleDialogflowCxEntityTypeEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#entities GoogleDialogflowCxEntityType#entities}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Indicates whether the entity type can be automatically expanded.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#kind GoogleDialogflowCxEntityType#kind}

---

##### `autoExpansionMode`<sup>Optional</sup> <a name="autoExpansionMode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```typescript
public readonly autoExpansionMode: string;
```

- *Type:* string

Represents kinds of entities.

* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#auto_expansion_mode GoogleDialogflowCxEntityType#auto_expansion_mode}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#deletion_policy GoogleDialogflowCxEntityType#deletion_policy}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```typescript
public readonly enableFuzzyExtraction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#enable_fuzzy_extraction GoogleDialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `excludedPhrases`<sup>Optional</sup> <a name="excludedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```typescript
public readonly excludedPhrases: IResolvable | GoogleDialogflowCxEntityTypeExcludedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#excluded_phrases GoogleDialogflowCxEntityType#excluded_phrases}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#language_code GoogleDialogflowCxEntityType#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#parent GoogleDialogflowCxEntityType#parent}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#redact GoogleDialogflowCxEntityType#redact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxEntityTypeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#timeouts GoogleDialogflowCxEntityType#timeouts}

---

### GoogleDialogflowCxEntityTypeEntities <a name="GoogleDialogflowCxEntityTypeEntities" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

const googleDialogflowCxEntityTypeEntities: googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms">synonyms</a></code> | <code>string[]</code> | A collection of value synonyms. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value">value</a></code> | <code>string</code> | The primary value associated with this entity entry. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#synonyms GoogleDialogflowCxEntityType#synonyms}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeExcludedPhrases <a name="GoogleDialogflowCxEntityTypeExcludedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

const googleDialogflowCxEntityTypeExcludedPhrases: googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value">value</a></code> | <code>string</code> | The word or phrase to be excluded. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeTimeouts <a name="GoogleDialogflowCxEntityTypeTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

const googleDialogflowCxEntityTypeTimeouts: googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxEntityTypeEntitiesList <a name="GoogleDialogflowCxEntityTypeEntitiesList" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxEntityTypeEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxEntityTypeEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>[]

---


### GoogleDialogflowCxEntityTypeEntitiesOutputReference <a name="GoogleDialogflowCxEntityTypeEntitiesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxEntityTypeEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesList <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesList" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxEntityTypeExcludedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>[]

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxEntityTypeExcludedPhrases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>

---


### GoogleDialogflowCxEntityTypeTimeoutsOutputReference <a name="GoogleDialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxEntityType } from '@cdktn/provider-google-beta'

new googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxEntityTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---



