# `googleDataplexMetadataFeed` Submodule <a name="`googleDataplexMetadataFeed` Submodule" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexMetadataFeed <a name="GoogleDataplexMetadataFeed" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

new googleDataplexMetadataFeed.GoogleDataplexMetadataFeed(scope: Construct, id: string, config: GoogleDataplexMetadataFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig">GoogleDataplexMetadataFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig">GoogleDataplexMetadataFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters"></a>

```typescript
public putFilters(value: GoogleDataplexMetadataFeedFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope"></a>

```typescript
public putScope(value: GoogleDataplexMetadataFeedScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexMetadataFeedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic"></a>

```typescript
public resetPubsubTopic(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexMetadataFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput">metadataFeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId">metadataFeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters"></a>

```typescript
public readonly filters: GoogleDataplexMetadataFeedFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope"></a>

```typescript
public readonly scope: GoogleDataplexMetadataFeedScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexMetadataFeedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput"></a>

```typescript
public readonly filtersInput: GoogleDataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataFeedIdInput`<sup>Optional</sup> <a name="metadataFeedIdInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput"></a>

```typescript
public readonly metadataFeedIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput"></a>

```typescript
public readonly scopeInput: GoogleDataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexMetadataFeedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId"></a>

```typescript
public readonly metadataFeedId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexMetadataFeedConfig <a name="GoogleDataplexMetadataFeedConfig" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

const googleDataplexMetadataFeedConfig: googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId">metadataFeedId</a></code> | <code>string</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#location GoogleDataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId"></a>

```typescript
public readonly metadataFeedId: string;
```

- *Type:* string

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#metadata_feed_id GoogleDataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope"></a>

```typescript
public readonly scope: GoogleDataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#scope GoogleDataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#deletion_policy GoogleDataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters"></a>

```typescript
public readonly filters: GoogleDataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#filters GoogleDataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#labels GoogleDataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#pubsub_topic GoogleDataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexMetadataFeedTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#timeouts GoogleDataplexMetadataFeed#timeouts}

---

### GoogleDataplexMetadataFeedFilters <a name="GoogleDataplexMetadataFeedFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

const googleDataplexMetadataFeedFilters: googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes">aspectTypes</a></code> | <code>string[]</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes">changeTypes</a></code> | <code>string[]</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes">entryTypes</a></code> | <code>string[]</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `aspectTypes`<sup>Optional</sup> <a name="aspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes"></a>

```typescript
public readonly aspectTypes: string[];
```

- *Type:* string[]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#aspect_types GoogleDataplexMetadataFeed#aspect_types}

---

##### `changeTypes`<sup>Optional</sup> <a name="changeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes"></a>

```typescript
public readonly changeTypes: string[];
```

- *Type:* string[]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#change_types GoogleDataplexMetadataFeed#change_types}

---

##### `entryTypes`<sup>Optional</sup> <a name="entryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes"></a>

```typescript
public readonly entryTypes: string[];
```

- *Type:* string[]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_types GoogleDataplexMetadataFeed#entry_types}

---

### GoogleDataplexMetadataFeedScope <a name="GoogleDataplexMetadataFeedScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

const googleDataplexMetadataFeedScope: googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups">entryGroups</a></code> | <code>string[]</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel">organizationLevel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects">projects</a></code> | <code>string[]</code> | The projects whose entries you want to listen to. |

---

##### `entryGroups`<sup>Optional</sup> <a name="entryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups"></a>

```typescript
public readonly entryGroups: string[];
```

- *Type:* string[]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_groups GoogleDataplexMetadataFeed#entry_groups}

---

##### `organizationLevel`<sup>Optional</sup> <a name="organizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel"></a>

```typescript
public readonly organizationLevel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#organization_level GoogleDataplexMetadataFeed#organization_level}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#projects GoogleDataplexMetadataFeed#projects}

---

### GoogleDataplexMetadataFeedTimeouts <a name="GoogleDataplexMetadataFeedTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

const googleDataplexMetadataFeedTimeouts: googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexMetadataFeedFiltersOutputReference <a name="GoogleDataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

new googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes">resetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes">resetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes">resetEntryTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectTypes` <a name="resetAspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```typescript
public resetAspectTypes(): void
```

##### `resetChangeTypes` <a name="resetChangeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```typescript
public resetChangeTypes(): void
```

##### `resetEntryTypes` <a name="resetEntryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```typescript
public resetEntryTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">aspectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">changeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">entryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes">aspectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes">changeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes">entryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectTypesInput`<sup>Optional</sup> <a name="aspectTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```typescript
public readonly aspectTypesInput: string[];
```

- *Type:* string[]

---

##### `changeTypesInput`<sup>Optional</sup> <a name="changeTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```typescript
public readonly changeTypesInput: string[];
```

- *Type:* string[]

---

##### `entryTypesInput`<sup>Optional</sup> <a name="entryTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```typescript
public readonly entryTypesInput: string[];
```

- *Type:* string[]

---

##### `aspectTypes`<sup>Required</sup> <a name="aspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```typescript
public readonly aspectTypes: string[];
```

- *Type:* string[]

---

##### `changeTypes`<sup>Required</sup> <a name="changeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```typescript
public readonly changeTypes: string[];
```

- *Type:* string[]

---

##### `entryTypes`<sup>Required</sup> <a name="entryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```typescript
public readonly entryTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---


### GoogleDataplexMetadataFeedScopeOutputReference <a name="GoogleDataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

new googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups">resetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">resetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryGroups` <a name="resetEntryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```typescript
public resetEntryGroups(): void
```

##### `resetOrganizationLevel` <a name="resetOrganizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```typescript
public resetOrganizationLevel(): void
```

##### `resetProjects` <a name="resetProjects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">entryGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">organizationLevelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups">entryGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel">organizationLevel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entryGroupsInput`<sup>Optional</sup> <a name="entryGroupsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```typescript
public readonly entryGroupsInput: string[];
```

- *Type:* string[]

---

##### `organizationLevelInput`<sup>Optional</sup> <a name="organizationLevelInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```typescript
public readonly organizationLevelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `entryGroups`<sup>Required</sup> <a name="entryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```typescript
public readonly entryGroups: string[];
```

- *Type:* string[]

---

##### `organizationLevel`<sup>Required</sup> <a name="organizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```typescript
public readonly organizationLevel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---


### GoogleDataplexMetadataFeedTimeoutsOutputReference <a name="GoogleDataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexMetadataFeed } from '@cdktn/provider-google-beta'

new googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexMetadataFeedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---



